using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using DataLayer.Repositories;
using PagedList;

namespace MartialArts.Controllers
{
    public class HomeController : Controller
    {
        private readonly IPostRepository _postRepository;

        public HomeController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        public ActionResult Autocomplete(string term)
        {
            var contents =  _postRepository.GetAllPostsByTermAsync(term).Result.Select(r => new{label = r.PostTitle});
            return Json(contents, JsonRequestBehavior.AllowGet);
        }

        public async Task<ActionResult> Index()
        {
            var posts = await _postRepository.GetAllPostsAsync();
            if (posts != null)
            {
                if (Request.IsAjaxRequest())
                {
                    return PartialView("_PostContent", posts);
                }

            }
            return View("Index", posts);
        }
       
        [HttpGet]
        public ActionResult PostDetails(int? id)
        {
            var obj = _postRepository.GetPost(id);
            if (obj != null)
            {
                return View(obj);
            }
            return HttpNotFound();
        }


        //[HttpGet]
        //public ActionResult SearchContent()
        //{
           
        //    return View();
        //}

        [HttpGet]
        public async Task<ActionResult> SearchContent(string term)
        {
            var contents = await _postRepository.GetAllPostsByTermAsync(term);
            return View(contents);
        }
    }
}