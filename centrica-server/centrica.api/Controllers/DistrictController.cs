using centrica.datamodels;
using centrica.services.Commands;
using centrica.services.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace centrica.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DistrictController : ControllerBase
    {
        private readonly IMediator _mediator;

        public DistrictController(IMediator mediator)
        {
            _mediator = mediator;
        }
        // GET: api/<DistrictController>
        [HttpGet]
        public async Task<IEnumerable<DistrictQuery>> Get()
        {
            return await _mediator.Send(new GetDistrictsQuery());
        }

        // GET api/<DistrictController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DistrictController>
        [HttpPost]
        public async void Post([FromBody] string value)
        {
            var json = JsonConvert.DeserializeObject(value);
            var district = JsonConvert.DeserializeObject<AddDistrictCommand>(json.ToString());
            await _mediator.Send(district);
        }

        // PUT api/<DistrictController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DistrictController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
