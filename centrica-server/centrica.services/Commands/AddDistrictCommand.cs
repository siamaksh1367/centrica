using centrica.datamodels;
using centrica.repository.Generic;
using MediatR;

namespace centrica.services.Commands
{
    public record AddDistrictCommand(District District) : IRequest;
    public class AddDistrictHandler : IRequestHandler<AddDistrictCommand>
    {
        private readonly IUnitOfWork _unitOfWork;

        public AddDistrictHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task Handle(AddDistrictCommand request, CancellationToken cancellationToken)
        {
            await _unitOfWork.DistrictRepository.AddAsync(request.District);
        }
    }
}
