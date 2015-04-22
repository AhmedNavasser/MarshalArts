using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using DataLayer;
using DataLayer.Infrastructure;
using DataLayer.Migrations;
using DomainModel;
using MartialArts.Infrastructure;
using Ninject;

namespace MartialArts
{
    public class MvcApplication : System.Web.HttpApplication
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            ControllerBuilder.Current.SetControllerFactory(new CustomControllerFactory());
            //Database.SetInitializer(new MigrateDatabaseToLatestVersion<MartialArtsContext,Configuration>());
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<MartialArtsContext>());
        }
    }
}
