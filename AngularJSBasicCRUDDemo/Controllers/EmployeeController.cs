using System.Web.Mvc;

namespace AngularJSBasicCRUDDemo.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult EmployeeList()
        {
            return View();
        }
        public ActionResult EmployeeDetails()
        {
            return View();
        }

    }
}