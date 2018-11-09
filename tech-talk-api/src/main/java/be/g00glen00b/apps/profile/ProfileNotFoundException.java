package be.g00glen00b.apps.profile;

import com.fasterxml.jackson.annotation.JsonIgnore;
import graphql.ErrorType;
import graphql.GraphQLError;
import graphql.language.SourceLocation;
import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
public class ProfileNotFoundException extends RuntimeException implements GraphQLError {
    private Long id;

    @Override
    public String getMessage() {
        return "Profile with id '" + id + "' was not found";
    }

    @Override
    public List<SourceLocation> getLocations() {
        return null;
    }

    @Override
    public ErrorType getErrorType() {
        return ErrorType.DataFetchingException;
    }

    @Override
    @JsonIgnore
    public StackTraceElement[] getStackTrace() {
        return super.getStackTrace();
    }
}
