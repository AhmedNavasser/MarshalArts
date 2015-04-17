using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using DataLayer;
using DomainModel;
using MarsalArts.Infrastructure;
using Ninject;

namespace MarsalArts
{
    public class MvcApplication : System.Web.HttpApplication
    {
        public static List<Post> Posts = new List<Post>();
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            ControllerBuilder.Current.SetControllerFactory(new CustomControllerFactory());
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<MartialArtsContext>());
        }
    }
}
