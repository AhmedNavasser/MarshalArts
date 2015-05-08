using System.Threading.Tasks;
using System.Web.Mvc;
using DomainModel;
using MartialArts.Infrastructure;
using MartialArts.ViewModels;

namespace MartialArts.Areas.Admin.Controllers
{
    [Authorize]
    public class AdminController : Controller
    {
        private static readonly UserViewModel UserInfoContainer = new UserViewModel();
        private readonly IAuthenticationProvider _authenticationProvider;

        public AdminController(IAuthenticationProvider authenticationProvider)
        {
            _authenticationProvider = authenticationProvider;
        }

        [AllowAnonymous]
        // GET: Admin/Admin
        public virtual ActionResult Index()
        {
            return View();
        }

        [ValidateAntiForgeryToken]
        [HttpPost]
        [AllowAnonymous]
        public virtual async Task<ActionResult> Index(User user)
        {
            if (ModelState.IsValid)
            {
                var authenticationResult = await _authenticationProvider.Authenticate(user.UserName, user.Password);
                if (!authenticationResult)
                    return View("Index");

                UserInfoContainer.UserName = user.UserName;
                return RedirectToAction("ControlPanel");
            }
            return View();
        }

        [HttpGet]
        public virtual ActionResult ControlPanel()
        {
            return View(UserInfoContainer);
        }
    }
}