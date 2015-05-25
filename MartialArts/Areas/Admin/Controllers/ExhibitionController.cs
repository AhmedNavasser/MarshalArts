using System.Collections.Generic;
using System.IO;
using System.Web;
using System.Web.Mvc;
using DataLayer.Repositories;
using DomainModel;

namespace MartialArts.Areas.Admin.Controllers
{
    [Authorize]
    public class ExhibitionController : Controller
    {
        private readonly IExhibitionRepository _exhibitionRepository;
        private static readonly List<string> ImageFilePath = new List<string>(); 
        public ExhibitionController(IExhibitionRepository repository)
        {
            _exhibitionRepository = repository;
        }
        [HttpGet]
        public  ActionResult CreateNewExhibition()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult CreateNewExhibition(Exhibition exhibition)
        {
            if (!ModelState.IsValid)
                return View(exhibition);
            foreach (var ImagePath in ImageFilePath)
            {
                var image = new Image {ImagePath = ImagePath};
                exhibition.Images.Add(image);
            }
            _exhibitionRepository.AddNewExhibition(exhibition);
            return RedirectToAction("Index", "Exhibition",new{area=""});
        }

        
        public ActionResult Save(IEnumerable<HttpPostedFileBase> files)
        {
            //if (!Directory.Exists(Server.MapPath("~/App_Data/Uploaded_Images")))
            //{
            //    Directory.CreateDirectory(Server.MapPath("~/App_Data/Uploaded_Images"));
            //}
            // The Name of the Upload component is "files"
            if (files != null)
            {
                foreach (var file in files)
                {
                    // Some browsers send file names with full path.
                    // We are only interested in the file name.
                    var fileName = Path.GetFileName(file.FileName);
                    var physicalPath = Path.Combine(Server.MapPath("~/Content/Images"), fileName);
                    file.SaveAs(physicalPath);
                    ImageFilePath.Add(physicalPath);
                }
            }
            // Return an empty string to signify success
            return Content("");
        }

        public ActionResult Remove(string[] fileNames)
        {
            // The parameter of the Remove action must be called "fileNames"

            if (fileNames != null)
            {
                foreach (var fullName in fileNames)
                {
                    var fileName = Path.GetFileName(fullName);
                    var physicalPath = Path.Combine(Server.MapPath("~/Content/Images"), fileName);

                    // TODO: Verify user permissions

                    if (System.IO.File.Exists(physicalPath))
                    {
                        System.IO.File.Delete(physicalPath);
                    }
                }
            }

            // Return an empty string to signify success
            return Content("");
        }
    }
}