using centrica.datamodels;
using centrica.repository.Generic;
using MediatR;

namespace centrica.services.Queries
{
    public record GetDistrictsQuery : IRequest<IEnumerable<DistrictQuery>>;

    public class GetDistrictsQueryHandler : IRequestHandler<GetDistrictsQuery, IEnumerable<DistrictQuery>>
    {
        private readonly IUnitOfWork _unitOfWork;

        public GetDistrictsQueryHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<IEnumerable<DistrictQuery>> Handle(GetDistrictsQuery request, CancellationToken cancellationToken) =>
            await _unitOfWork.DistrictRepository.GetAllAsync();
    }


}
