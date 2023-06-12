using centrica.datamodels;
using centrica.repository.Generic;
using MediatR;

namespace centrica.services.Queries
{
    public record GetSalePersonByDistirctIdQuery(int districtId) : IRequest<IEnumerable<SalePersonQuery>>;
    public class GetSalePersonByDistirctIdQueryHandler : IRequestHandler<GetSalePersonByDistirctIdQuery, IEnumerable<SalePersonQuery>>
    {
        private readonly IUnitOfWork _unitOfWork;

        public GetSalePersonByDistirctIdQueryHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<IEnumerable<SalePersonQuery>> Handle(GetSalePersonByDistirctIdQuery request, CancellationToken cancellationToken) =>
            await _unitOfWork.DistrictSalePersonRepository.GetSalePersonWithDistrictId(request.districtId);
    }
}
