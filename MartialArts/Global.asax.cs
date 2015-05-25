using System.Data.Entity;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using DataLayer.Infrastructure;
using DataLayer.Migrations;
using MartialArts.Infrastructure;


namespace MartialArts
{
    public class MvcApplication : HttpApplication
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
        protected void Application_Start()
        {
            RegisterGlobalFilters(new GlobalFilterCollection());
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            ControllerBuilder.Current.SetControllerFactory(new CustomControllerFactory());
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<MartialArtsContext, Configuration>());
            BundleConfig.RegisterBundle(BundleTable.Bundles);
        }
    }
}
