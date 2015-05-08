using System.Web.Mvc;

namespace MartialArts.Infrastructure.Helpers
{
    public static class CustomHelper
    {
        public static MvcHtmlString Image(this HtmlHelper htmlHelper, string src, string altText,
            object htmlAttribute = null)
        {
            var tagBuilder = new TagBuilder("img");
            tagBuilder.MergeAttribute("src", src);
            tagBuilder.MergeAttribute("alt", altText);

            if (htmlAttribute != null)
            {
                var attribute = HtmlHelper.AnonymousObjectToHtmlAttributes(htmlAttribute);
                tagBuilder.MergeAttributes(attribute);
            }
            return MvcHtmlString.Create(tagBuilder.ToString(TagRenderMode.SelfClosing));
        }
    }
}