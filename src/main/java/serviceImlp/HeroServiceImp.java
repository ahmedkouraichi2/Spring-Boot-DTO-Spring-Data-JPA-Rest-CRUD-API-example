package serviceImlp;

import dto.HeroDto;
import model.Hero;
import org.springframework.beans.factory.annotation.Autowired;
import repository.HeroRepository;
import services.mapping.IHeroMapper;
import servicess.IHeroService;

import java.util.List;

public class HeroServiceImp implements IHeroService {
    @Autowired
    private HeroRepository heroRepository ;

    @Autowired
    private IHeroMapper  heroMapper;



    @Override
    public List<HeroDto> getHeros() {
        List<Hero> heroes =  heroRepository.findAll();
        List<HeroDto> heroDtos = heroMapper.toDtos(heroes);
        return heroDtos;

    }

    @Override
    public HeroDto saveHero(HeroDto heroDto) {

        Hero h = heroRepository.save(heroMapper.toEntity(heroDto));
        return heroMapper.toDto(h);
    }

    @Override
    public HeroDto updateHero(HeroDto heroDto) {
        Hero hero = heroRepository.getById(heroDto.getId());
        hero.setName(heroDto.getName());
        hero.setImage(heroDto.getImage());
        hero.setPower(heroDto.getPower());
        Hero heroFinal = heroRepository.save(heroMapper.toEntity(heroDto));
        return heroMapper.toDto(heroFinal);

	}




    @Override
    public Boolean delateHero(Long id) {

        try {
            heroRepository.deleteById(id);
        } catch(Exception e) {
            return false;
        }
        return true;

    }
}
