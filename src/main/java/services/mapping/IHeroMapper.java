package services.mapping;

import dto.HeroDto;
import model.Hero;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IHeroMapper {

    Hero toEntity(HeroDto heroDto);

    HeroDto toDto(Hero hero);

    List<HeroDto> toDtos(List<Hero> languages);
}
