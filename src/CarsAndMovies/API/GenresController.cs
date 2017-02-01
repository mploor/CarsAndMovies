using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CarsAndMovies.Models;
using CarsAndMovies.Services;


namespace CarsAndMovies.API
{
    [Route("api/[controller]")]
    public class GenresController : Controller
    {
        private GenreService _genreService;

        public GenresController(GenreService genreService)
        {
            this._genreService = genreService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var genres = _genreService.ListGenres().Select(g => new {g.Id, g.Name});
            return Ok(genres);
        }

        [HttpGet("{id}")]
        public Genre Get(int id)
        {
            return _genreService.FindGenre(id);
        }
    }
}
