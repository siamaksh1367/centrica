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
    public class StoreController : ControllerBase
    {
        private readonly IMediator _mediator;

        public StoreController(IMediator mediator)
        {
            _mediator = mediator;
        }
        // GET: api/<StoreController>
        [Route("stores/district/{districtId}")]
        public async Task<IEnumerable<StoreQuery>> GetStoresByDistrictId(int districtId)
        {
            return await _mediator.Send(new GetStoreByDistricIdQuery(districtId));
        }

        // POST api/<StoreController>
        [HttpPost]
        public async Task Post([FromBody] string value)
        {
            var json = JsonConvert.DeserializeObject(value);
            var store = JsonConvert.DeserializeObject<AddStoreCommand>(json.ToString());
            await _mediator.Send(store);
        }
    }
}
