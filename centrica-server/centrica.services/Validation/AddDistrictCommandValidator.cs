using centrica.services.Commands;
using FluentValidation;

namespace centrica.services.Validation
{
    public class AddDistrictCommandValidator : AbstractValidator<AddDistrictCommand>
    {
        public AddDistrictCommandValidator()
        {
            RuleFor(x => x.name).NotEmpty();
        }
    }
}
