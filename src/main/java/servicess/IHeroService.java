package servicess;

import dto.HeroDto;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface IHeroService {
    public List<HeroDto> getHeros();
    public HeroDto saveHero(HeroDto heroDto);
    public HeroDto updateHero(HeroDto heroDto);
    public Boolean delateHero(Long id);


}
