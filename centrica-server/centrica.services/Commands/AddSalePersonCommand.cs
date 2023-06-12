using AutoMapper;
using centrica.datamodels;
using centrica.repository.Generic;
using MediatR;

namespace centrica.services.Commands
{
    public record AddSalePersonCommand(string name, int districtId, bool isPrimary) : IRequest;

    public class AddSalePersonCommandHandler : IRequestHandler<AddSalePersonCommand>
    {

        public AddSalePersonCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public async Task Handle(AddSalePersonCommand request, CancellationToken cancellationToken)
        {
            await _unitOfWork.SalePersonRepository.AddAsync(_mapper.Map<SalePersonCommand>(request));
        }
    }
}
