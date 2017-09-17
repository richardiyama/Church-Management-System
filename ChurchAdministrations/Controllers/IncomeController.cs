using System;
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
    public class IncomeController : ApiController
    {
        private ChurchAdministrationsContextDB db = new ChurchAdministrationsContextDB();

        // GET: api/Income
        public IQueryable<Income> GetIncomes()
        {
            return db.Incomes;
        }

        // GET: api/Income/5
        [ResponseType(typeof(Income))]
        public async Task<IHttpActionResult> GetIncome(int id)
        {
            Income income = await db.Incomes.FindAsync(id);
            if (income == null)
            {
                return NotFound();
            }

            return Ok(income);
        }

        // PUT: api/Income/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutIncome(int id, Income income)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != income.IncomeID)
            {
                return BadRequest();
            }

            db.Entry(income).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IncomeExists(id))
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

        // POST: api/Income
        [ResponseType(typeof(Income))]
        public async Task<IHttpActionResult> PostIncome(Income income)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Incomes.Add(income);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = income.IncomeID }, income);
        }

        // DELETE: api/Income/5
        [ResponseType(typeof(Income))]
        public async Task<IHttpActionResult> DeleteIncome(int id)
        {
            Income income = await db.Incomes.FindAsync(id);
            if (income == null)
            {
                return NotFound();
            }

            db.Incomes.Remove(income);
            await db.SaveChangesAsync();

            return Ok(income);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool IncomeExists(int id)
        {
            return db.Incomes.Count(e => e.IncomeID == id) > 0;
        }
    }
}