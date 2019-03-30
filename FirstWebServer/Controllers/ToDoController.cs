using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FirstWebServer.Data;
using FirstWebServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FirstWebServer.Controllers
{

    //Defines an API controller class without methods.
    //Decorates the class with the[ApiController] attribute.This attribute indicates that the controller responds to web API requests. 
    //For information about specific behaviors that the attribute enables, see Annotation with ApiController 
    //attribute.Uses DI to inject the database context (TodoContext) into the controller. The database context is used 
    //in each of the CRUD methods in the controller. Adds an item named Item1 to the database if the database is empty.
    //This code is in the constructor, so it runs every time there's a new HTTP request. 
    //If you delete all items, the constructor creates Item1 again the next time an API method is called. 
    //So it may look like the deletion didn't work when it actually did work.
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly ToDoContext _context;

        public ToDoController(ToDoContext context)
        {
            _context = context;

            if (_context.ToDoItems.Count() == 0)
            {
                _context.ToDoItems.Add(new Models.ToDoItem { Name = "Item1" });
                _context.SaveChanges();
            }

        }

        //Add Get methods

        // Get: api/ToDo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToDoItem>>> GetToDoItems()
        {
            return await _context.ToDoItems.ToListAsync();
        }

        // Get api/ToDo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDoItem>> GetTodoItem(int id)
        {
            var todoItem = await _context.ToDoItems.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }

        //Add a Create method

        // POST: api/ToDo
        [HttpPost]
        public async Task<ActionResult<ToDoItem>> PostTodoItem(ToDoItem item)
        {
            _context.ToDoItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTodoItem), new { id = item.Id }, item);
        }

        //Add a PutTodoItem method

        // PUT: api/ToDo/1
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem(int id, ToDoItem item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }


        //Add a DeleteTodoItem method

        // DELETE: api/Todo/2
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoItem(int id)
        {
            var todoItem = await _context.ToDoItems.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            _context.ToDoItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }


    }
}