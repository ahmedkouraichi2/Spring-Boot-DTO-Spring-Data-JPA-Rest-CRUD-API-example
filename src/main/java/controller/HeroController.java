package controller;

import dto.HeroDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import serviceImlp.HeroServiceImp;

import java.util.List;

@RestController
@RequestMapping("/hero")
@CrossOrigin(origins = "*")
public class HeroController {
    @Autowired
    private HeroServiceImp heroServiceImp;

    @GetMapping("/all")
    public List<HeroDto> getHeros(){
         List<HeroDto> heros = heroServiceImp.getHeros();
         return heros;

    }

    @PostMapping("add")
    public HeroDto saveLangage(@RequestBody HeroDto heroDto) throws Exception {
        HeroDto hero = heroServiceImp.saveHero(heroDto);
        return hero;
    }

    @PutMapping("update")
    public HeroDto  updateHero(@RequestBody HeroDto heroDto) throws Exception {
        HeroDto hero= heroServiceImp.updateHero(heroDto);
        return  hero;

    }

    @DeleteMapping("/{id}")
    public Boolean deleteHero(@PathVariable("id") Long id) throws Exception {
        return heroServiceImp.delateHero(id);

    }




}
