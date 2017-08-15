using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Net.Http.Headers;
using System.Web.Http.Cors;
using System.Web.Http.Routing;

namespace ChurchAdministrations
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            //var constraints = new { httpMethod = new HttpMethodConstraint(HttpMethod.Options) };
            //config.Routes.IgnoreRoute("OPTIONS", "{*pathInfo}", constraints);

            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            //Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

          

            // Web API routes
            config.MapHttpAttributeRoutes();

            var routes = config.Routes;

            routes.MapHttpRoute(
            name: "ApiMember",
            routeTemplate: "api/{controller}/{id}",
            defaults: new { controller = "Member", id = RouteParameter.Optional }
            );

            routes.MapHttpRoute(
            name: "ApiGroup",
            routeTemplate: "api/{controller}/{id}",
            defaults: new { controller = "Group", id = RouteParameter.Optional }
            );

            routes.MapHttpRoute(
            name: "ApiMinistry",
            routeTemplate: "api/{controller}/{id}",
            defaults: new { controller = "Ministry", id = RouteParameter.Optional }
            );

            routes.MapHttpRoute(
            name: "DefaultApi",
            routeTemplate: "api/{controller}/{id}",
            defaults: new { id = RouteParameter.Optional }
            );

            config.Formatters.Remove(config.Formatters.XmlFormatter);
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/json"));
        }
    }
}
