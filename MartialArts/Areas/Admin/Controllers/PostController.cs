using System;
using System.IO;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using DataLayer.Repositories;
using DomainModel;
using MartialArts.Infrastructure;
using MartialArts.Models;
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
           post.PublishDate = String.Format("{0}   ساعت  {1}", DateTime.Now.ToSolarDateTime(), DateTime.Now.ToShortTimeString());
           _postRepository.AddNewPostAsync(post);
            return RedirectToAction("Index","Home",new {area=""});
        }

        [HttpGet]
        public ActionResult EditPost(int ?id)
        {
            var post = _postRepository.GetPost(id);
            return View(post);
        }

        [AllowAnonymous]
        [HttpPost]
        public ActionResult EditPost(int? id,[Bind(Exclude = "PostId")]Post post)
        {
            post.PublishDate = String.Format("{0}   ساعت  {1}", DateTime.Now.ToSolarDateTime(),
                DateTime.Now.ToShortTimeString());
            _postRepository.EditPost(id,post);
            return RedirectToAction("Index", "Home",new {area = ""});
        }
        /// <summary>
        /// ذخيره سازي خودكار
        /// </summary>
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult FroalaAutoSave(string body, int? postId) // نام پارامتر بادي را تغيير ندهيد
        {
            //todo: save body ...
            body = Sanitizer.GetSafeHtml(body);
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
            var rootPath = Server.MapPath("~/Content/Images");
            file.SaveAs(Path.Combine(rootPath, fileName));
            var virtualPath = Server.PhysicalPathToVirtualConverter(rootPath, Request);
            return Json(new { link = virtualPath + "/" + fileName }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult FroalaUploadFile(HttpPostedFileBase file, int? postId) // نام پارامتر فايل را تغيير ندهيد
        {
            var fileName = Path.GetFileName(file.FileName);
            var rootPath = Server.MapPath("~/files/");
            file.SaveAs(Path.Combine(rootPath , fileName));
            return Json(new { link = "~/Content/files/" + fileName }, JsonRequestBehavior.AllowGet);
        }

        public async Task<ActionResult> SearchContent(string term)
        {
            var item = await  _postRepository.GetAllPostsByTermAsync(term);
            return View(item);
        }

    }
}