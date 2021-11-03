interface Settings {
    //Conditions that a Tweet has to match to trigger auto-comment
    conditions: {
        //Authors of Tweets that we want to comment
        tweetAuthors:string[],
        //Regex that Tweet have to match to trigger auto-comment
        hasToContain:RegExp
    }[],
    content: {
        //Random text to post as a comment
        randomTexts:string[],
        //Images to post with comment
        images:string[]
    }
}