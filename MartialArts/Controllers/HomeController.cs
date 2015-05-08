using System.Threading.Tasks;
using System.Web.Mvc;
using DataLayer.Repositories;

namespace MartialArts.Controllers
{
    public class HomeController : Controller
    {
        private readonly IPostRepository _postRepository;

        public HomeController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        // GET: Home
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
        public ActionResult PostDetails(int? id, string url)
        {
            var obj = _postRepository.GetPost(id);
            if (obj != null)
            {
                return View(obj);
            }
            return HttpNotFound();
        }
    }
}