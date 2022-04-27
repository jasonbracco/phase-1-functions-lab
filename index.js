function distanceFromHqInBlocks(block){
    return (block>42)? block-42:42-block
}


function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264
}


function distanceTravelledInFeet(start, destination){
    if (start>destination){
        return ((start-destination)*264)
    }
    else{
        return ((destination-start)*264)
    }
}


function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start,destination)<400){
        return 0
    }
    else if (distanceTravelledInFeet(start,destination)>=400 && distanceTravelledInFeet(start,destination)<=2000){
        return ((distanceTravelledInFeet(start,destination)-400)*.02)
    }
    else if (distanceTravelledInFeet(start,destination)>2000 && distanceTravelledInFeet(start,destination)<=2499){
        return 25
    }
    else if (distanceTravelledInFeet(start,destination)>2500){
        return 'cannot travel that far'
    }

}