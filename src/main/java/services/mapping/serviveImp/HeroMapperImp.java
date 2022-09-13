package services.mapping.serviveImp;
import dto.HeroDto;
import model.Hero;
import org.springframework.stereotype.Service;

import services.mapping.IHeroMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class HeroMapperImp implements IHeroMapper {
    @Override
    public Hero toEntity(HeroDto heroDto) {
        Hero hero = new Hero();
        hero.setId(heroDto.getId());
        hero.setName(heroDto.getName());
        hero.setPower(heroDto.getPower());
        hero.setImage(heroDto.getImage());
        return hero;
    }

    @Override
    public HeroDto toDto(Hero hero) {
      HeroDto heroDto = new HeroDto();
      heroDto.setId(hero.getId());
      heroDto.setImage(hero.getImage());
      heroDto.setName(hero.getName());
      heroDto.setPower(hero.getPower());
      return heroDto;
     }

    @Override
    public List<HeroDto> toDtos(List<Hero> heros) {
        List<HeroDto> heroDtos = new ArrayList<HeroDto>();
        for (Hero hero : heros) {
            heroDtos.add(toDto(hero));
        }
        return heroDtos;


    }
}
