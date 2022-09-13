package dto;

public class HeroDto {
    private Long id;
    private   String name;
    private   int power;
    private  String image ;

    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPower() {
        return power;
    }

    public void setPower(int power) {
        this.power = power;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public HeroDto(){

    }

    public HeroDto(Long id, String name, int power, String image) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.image = image;
    }
    public HeroDto( String name, int power, String image) {
        this.name = name;
        this.power = power;
        this.image = image;
    }

    public HeroDto( String name, int power) {
        this.name = name;
        this.power = power;
    }


}
