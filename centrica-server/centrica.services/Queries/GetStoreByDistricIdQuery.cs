using centrica.datamodels;
using centrica.repository.Generic;
using MediatR;

namespace centrica.services.Queries
{
    public record GetStoreByDistricIdQuery(int districtId) : IRequest<IEnumerable<StoreQuery>>;
    public class GetStoreByDistricIdQueryHandler : IRequestHandler<GetStoreByDistricIdQuery, IEnumerable<StoreQuery>>
    {
        private readonly IUnitOfWork _unitOfWork;

        public GetStoreByDistricIdQueryHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<IEnumerable<StoreQuery>> Handle(GetStoreByDistricIdQuery request, CancellationToken cancellationToken) =>
            await _unitOfWork.StoreRepository.GetAllAsync();
    }

}
