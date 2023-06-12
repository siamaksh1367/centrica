using AutoMapper;
using centrica.datamodels;
using centrica.services.Commands;

namespace centrica.services
{
    public static class AutoMapperConfig
    {
        public static IMapper Initialize()
        {
            var config = new MapperConfiguration(cfg =>
            {

                cfg.CreateMap<AddDistrictCommand, DistrictCommand>()
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.name));
            });

            return config.CreateMapper();
        }
    }
}