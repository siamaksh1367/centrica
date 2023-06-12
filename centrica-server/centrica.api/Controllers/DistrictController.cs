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

        // POST api/<DistrictController>
        [HttpPost]
        public async Task Post([FromBody] string value)
        {
            var json = JsonConvert.DeserializeObject(value);
            var district = JsonConvert.DeserializeObject<AddDistrictCommand>(json.ToString());
            await _mediator.Send(district);
        }
    }
}
