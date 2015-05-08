using System.Web.Mvc;

namespace MartialArts.Areas.Admin.Controllers
{
    [Authorize]
    public class ExhibitionController : Controller
    {
        // GET: Admin/Exhibition
        public virtual ActionResult CreateNewExhibition()
        {
            return View();
        }
    }
}