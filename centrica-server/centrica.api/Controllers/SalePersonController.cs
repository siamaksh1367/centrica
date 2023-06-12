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
    public class SalePersonController : ControllerBase
    {
        private readonly IMediator _mediator;

        public SalePersonController(IMediator mediator)
        {
            _mediator = mediator;
        }
        // GET: api/<StoreController>
        [HttpGet]
        [Route("district/{districtId}")]
        public async Task<IEnumerable<SalePersonQuery>> GetSalePersonByDistrictId(int districtId)
        {
            return await _mediator.Send(new GetSalePersonByDistirctIdQuery(districtId));
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
