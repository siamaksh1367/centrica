using centrica.datamodels;
using centrica.repository.Generic;
using MediatR;

namespace centrica.services.Commands
{
    public record AddSalePersonCommand(SalePerson SalePerson) : IRequest;

    public class AddSalePersonHandler : IRequestHandler<AddSalePersonCommand>
    {
        private readonly IUnitOfWork _unitOfWork;

        public AddSalePersonHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task Handle(AddSalePersonCommand request, CancellationToken cancellationToken)
        {
            await _unitOfWork.SalePersonRepository.AddAsync(request.SalePerson);
        }
    }
}
