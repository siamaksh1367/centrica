using AutoMapper;
using centrica.datamodels;
using centrica.repository.Generic;
using MediatR;

namespace centrica.services.Commands
{
    public record AddStoreCommand(string name) : IRequest;
    public class AddStoreCommandHandler : IRequestHandler<AddStoreCommand>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AddStoreCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        public async Task Handle(AddStoreCommand request, CancellationToken cancellationToken)
        {
            await _unitOfWork.StoreRepository.AddAsync(_mapper.Map<StoreCommand>(request));
        }
    }
}
