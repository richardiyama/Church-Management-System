﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ChurchAdministrations.Models;

namespace ChurchAdministrations.Controllers
{
    public class AttendanceController : ApiController
    {
        private ChurchAdministrationsContextDB db = new ChurchAdministrationsContextDB();

        // GET: api/Attendance
        public IQueryable<Attendance> GetAttendances()
        {
            return db.Attendances;
        }

        // GET: api/Attendance/5
        [ResponseType(typeof(Attendance))]
        public async Task<IHttpActionResult> GetAttendance(int id)
        {
            Attendance attendance = await db.Attendances.FindAsync(id);
            if (attendance == null)
            {
                return NotFound();
            }

            return Ok(attendance);
        }

        // PUT: api/Attendance/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAttendance(int id, Attendance attendance)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != attendance.AttendanceID)
            {
                return BadRequest();
            }

            db.Entry(attendance).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AttendanceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Attendance
        [ResponseType(typeof(Attendance))]
        public async Task<IHttpActionResult> PostAttendance(Attendance attendance)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Attendances.Add(attendance);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = attendance.AttendanceID }, attendance);
        }

        // DELETE: api/Attendance/5
        [ResponseType(typeof(Attendance))]
        public async Task<IHttpActionResult> DeleteAttendance(int id)
        {
            Attendance attendance = await db.Attendances.FindAsync(id);
            if (attendance == null)
            {
                return NotFound();
            }

            db.Attendances.Remove(attendance);
            await db.SaveChangesAsync();

            return Ok(attendance);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AttendanceExists(int id)
        {
            return db.Attendances.Count(e => e.AttendanceID == id) > 0;
        }
    }
}