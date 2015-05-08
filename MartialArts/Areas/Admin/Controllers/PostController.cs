using System.IO;
using System.Web;
using System.Web.Mvc;
using DataLayer.Repositories;
using DomainModel;
using Microsoft.Security.Application;

namespace MartialArts.Areas.Admin.Controllers
{
    [Authorize]
    public class PostController : Controller
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }
        // GET: Admin/Post
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult CreateNewPost()
        {
            return View();
        }



        /// <summary>
        /// Creates the new post.
        /// </summary>
        /// <param name="post">The post.</param>
        /// <returns>ActionResult.</returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult CreateNewPost(Post post)
        {
            if (!ModelState.IsValid) 
                return View(post);

           post.Content = Sanitizer.GetSafeHtmlFragment(post.Content);
           _postRepository.AddNewPostAsync(post);
            return RedirectToAction("Index","Home",new {area=""});
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        public ActionResult EditPost()
        {
            return View();
        }

        //[AllowAnonymous]
        //[HttpPost]
        //public ActionResult EditPost(Post post)
        //{

        //}
        /// <summary>
        /// ذخيره سازي خودكار
        /// </summary>
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult FroalaAutoSave(string body, int? postId) // نام پارامتر بادي را تغيير ندهيد
        {
            //todo: save body ...
            return new EmptyResult();
        }
        // todo: مسايل امنيتي آپلود را فراموش نكنيد
        /// <summary>
        /// ذخيره سازي تصاوير ارسالي
        /// </summary>
        [HttpPost]
        public ActionResult FroalaUploadImage(HttpPostedFileBase file, int? postId) // نام پارامتر فايل را تغيير ندهيد
        {
            var fileName = Path.GetFileName(file.FileName);
            var rootPath = Server.MapPath("~/images/");
            file.SaveAs(Path.Combine(rootPath, fileName));
            return Json(new { link = "images/" + fileName }, JsonRequestBehavior.AllowGet);
        }

    }
}