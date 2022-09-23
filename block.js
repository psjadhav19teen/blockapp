const {genesis_info}=require('./genesis.js');
const cryptoHash =require('./crypto-hash.js');
class Block
{
    constructor({timestamp,previoushash,currenthash,data})
    {
        this.timestamp=timestamp;
        this.previoushash=previoushash;
        this.currenthash=currenthash;
        this.data=data;
    }

    static genesis()
    {
        return new this(genesis_info);
    }
    static mineBlock({lastBlock,data})
    {
        const timestamp=new Date();
        const previoushash=lastBlock.currenthash;
        return new this({ 
           timestamp,
            previoushash,
            data,
            currenthash:cryptoHash(timestamp,previoushash,data)
        });


    }
}
module.exports=Block;