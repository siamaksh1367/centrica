using AutoMapper;
using centrica.datamodels;
using centrica.repository.Generic;
using MediatR;

namespace centrica.services.Commands
{
    public record AddDistrictCommand(string name) : IRequest;
    public class AddDistrictCommandHandler : IRequestHandler<AddDistrictCommand>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AddDistrictCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        public async Task Handle(AddDistrictCommand request, CancellationToken cancellationToken)
        {
            await _unitOfWork.DistrictRepository.AddAsync(_mapper.Map<DistrictCommand>(request));
        }
    }
}
