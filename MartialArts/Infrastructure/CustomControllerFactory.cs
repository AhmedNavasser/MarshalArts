using System;
using System.Web.Mvc;
using System.Web.Routing;
using DataLayer.Infrastructure;
using DataLayer.Repositories;
using Ninject;

namespace MartialArts.Infrastructure
{
    public class CustomControllerFactory : DefaultControllerFactory
    {
        private readonly IKernel _kernel;

        public CustomControllerFactory()
        {
            _kernel = new StandardKernel();
            SetBindings();
        }

        protected override IController GetControllerInstance(RequestContext requestContext, Type controllerType)
        {
            return controllerType == null
                ? null
                : (IController) _kernel.Get(controllerType);
        }

        private void SetBindings()
        {
            _kernel.Bind<IMartialArtsContext>().To<MartialArtsContext>();
            _kernel.Bind<IPostRepository>().To<PostRepository>();
            _kernel.Bind<IUserRepository>().To<UserRepository>();
            _kernel.Bind<IExhibitionRepository>().To<ExhibitionRepository>();
            _kernel.Bind<IAuthenticationProvider>().To<AuthenticationProvider>();
        }
    }
}