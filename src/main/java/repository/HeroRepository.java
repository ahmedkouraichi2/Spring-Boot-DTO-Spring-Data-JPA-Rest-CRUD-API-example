package repository;

import model.Hero;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeroRepository  extends JpaRepository<Hero,Long> {
}
