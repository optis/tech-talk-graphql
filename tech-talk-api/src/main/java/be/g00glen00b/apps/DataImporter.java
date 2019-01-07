package be.g00glen00b.apps;

import be.g00glen00b.apps.post.PostRepository;
import be.g00glen00b.apps.profile.Profile;
import be.g00glen00b.apps.profile.ProfileRepository;
import be.g00glen00b.apps.question.Question;
import be.g00glen00b.apps.question.QuestionRepository;
import com.google.common.collect.Lists;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import static be.g00glen00b.apps.post.Post.answer;
import static be.g00glen00b.apps.post.Post.firstPost;
import static be.g00glen00b.apps.profile.Profile.profile;
import static be.g00glen00b.apps.question.Question.question;

@Component
@AllArgsConstructor
public class DataImporter implements CommandLineRunner {
    private ProfileRepository profileRepository;
    private QuestionRepository questionRepository;
    private PostRepository postRepository;

    @Override
    public void run(String... args) {
        profileRepository.deleteAll();
        questionRepository.deleteAll();
        postRepository.deleteAll();
        Profile profile1 = profileRepository.save(profile("g00glen00b", "Software engineer", "me@g00glen00b.be", "Consultant at Cronos and Tech lead at Aquafin. Usually you can find me trying out new libraries and technologies. Loves both Java and JavaScript."));
        Profile profile2 = profileRepository.save(profile("alter.ego", "Anonymous guy", "john.doe@example.org", "My alternative personality."));
        Profile profile3 = profileRepository.save(profile("Bart Simpson", "Student", "dimitri.reg+bart@gmail.com", "Student at Springfield Elementary School. Practical pranker."));
        Profile profile4 = profileRepository.save(profile("Lisa Simpson", "Student", "dimitri.reg+lisa@gmail.com", "Student at Springfield Elementary School. Interested in science."));
        Profile profile5 = profileRepository.save(profile("Darth Vader", "Sith", "dimitri.reg+vader@gmail.com", "Experienced with the force."));
        Profile profile6 = profileRepository.save(profile("Finn the Human", "Confirmed Human", "dimitri.reg+finn@gmail.com", "Experienced in growing long golden hair."));
        Profile profile7 = profileRepository.save(profile("Jake the Dog", "Magical Dog", "dimitri.reg+jake@gmail.com", "Can morph into stuff."));
        Profile profile8 = profileRepository.save(profile("Homer Simpson", "Safety inspector", "dimitri.reg+homer@gmail.com", "Safety expert at Springfield Nuclear Power Plant. Has experience in eating donuts."));
        Profile profile9 = profileRepository.save(profile("Rick Sanchez", "Scientist", "dimitri.reg+rick@gmail.com", "Genius. Scientist. Alcoholist."));
        Profile profile10 = profileRepository.save(profile("Morty Smith", "Student", "dimitri.reg+morty@gmail.com", "Student at the Harry Herpson High School."));
        Question question1 = questionRepository.save(question("Can you use GraphQL with Spring boot?"));
        Question question2 = questionRepository.save(question("Can you use GraphQL with Node.js"));
        Question question3 = questionRepository.save(question("Which is better, REST or GraphQL?"));
        Question question4 = questionRepository.save(question("What is Apollo?"));
        Question question5 = questionRepository.save(question("What is GraphQL?"));
        Question question6 = questionRepository.save(question("What is a schema?"));
        Question question7 = questionRepository.save(question("How do you define GraphQL types"));
        Question question8 = questionRepository.save(question("What is a resolver?"));
        Question question9 = questionRepository.save(question("What are the root types?"));
        Question question10 = questionRepository.save(question("Who is behind GraphQL?"));
        Question question11 = questionRepository.save(question("What is the best website in the world?"));
        postRepository.saveAll(Lists.newArrayList(
            firstPost("Is it possible to integrate GraphQL with Spring boot?", profile2.getId(), question1.getId()),
            firstPost("Can we integrate GraphQL within our Node.js application?", profile3.getId(), question2.getId()),
            firstPost("How do REST and GraphQL compare? Which is better than the other?", profile4.getId(), question3.getId()),
            firstPost("What exactly is Apollo and what''s the difference between it and the standard JavaScript library?", profile5.getId(), question4.getId()),
            firstPost("What exactly is GraphQL?", profile6.getId(), question5.getId()),
            firstPost("What exactly is a GraphQL schema?", profile7.getId(), question6.getId()),
            firstPost("I've heard that you need to write types to be able to use GraphQL. How exactly do we do that?", profile8.getId(), question7.getId()),
            firstPost("What does a resolver exactly do?", profile9.getId(), question8.getId()),
            firstPost("What are the root types within GraphQL?", profile10.getId(), question9.getId()),
            firstPost("Who supports GraphQL or which company developed it?", profile2.getId(), question10.getId()),
            firstPost("What is the best website in the world?", profile3.getId(), question11.getId()),
            answer("Yes, the graphql-java library provides both servlet integration and a Spring boot starter for both GraphQL and the GraphiQL interface.", profile1.getId(), question1.getId()),
            answer("Yes, GraphQL comes with a Node.js library by default, but you can also choose a library like Apollo, which has some additional features.", profile1.getId(), question2.getId()),
            answer("Both have their advantages and disadvantages, neither is a silver bullet solution. That means that both are equally as good.", profile1.getId(), question3.getId()),
            answer("Apollo is a layer on top of the GraphQL library, and provides additional features such as caching. Additionally to providing a server framework, it also provides a client to easily access your GraphQL API", profile1.getId(), question4.getId()),
            answer("GraphQL is both the definition of what GraphQL should be, as the name of the reference implementation written in JavaScript", profile1.getId(), question5.getId()),
            answer("A GraphQL schema is a collection of types that are all linked together and start with a root type called Query for readonly operations and Mutation for all other types of operations.", profile1.getId(), question6.getId()),
            answer("You can create types by creating your own schema file and using the GraphQL schema syntax", profile1.getId(), question7.getId()),
            answer("A resolver can be used to resolve certain property of a type. It allows you to execute additional logic, for example to fetch additional data, or to apply certain business logic.", profile1.getId(), question8.getId()),
            answer("Types within GraphQL represent objects, and can be used to link together. To be able to access these types, you need to execute certain operations. These operations are divided into two cateoories. First there are the readonly operations or queries, and second there are the mutations. For both these categories there is a root type that can be used when querying your GraphQL API.", profile1.getId(), question9.getId()),
            answer("GraphQL is an open source library, initially developed by Facebook.", profile1.getId(), question10.getId())
        ));
    }
}
