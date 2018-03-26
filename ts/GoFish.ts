class GoFish extends Player{
    private user : Player;
    private dealer : Player;
    private dealerProfile: Profile;


    constructor(userProfile : Profile){
        super(userProfile);
        this.user = new Player(userProfile);
        this.dealerProfile = new Profile("dealer",0,1);
        this.dealer = new Player(this.dealerProfile);
    }
    public deal(){
        for(var i =0;i<7;i++){
            // this.user.getHand().addCard(Deck.getCard());
            // this.dealer.getHand().addCard(Deck.getCard());
        }
    }
}