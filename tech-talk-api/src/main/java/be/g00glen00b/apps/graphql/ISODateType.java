package be.g00glen00b.apps.graphql;

import graphql.language.StringValue;
import graphql.schema.Coercing;
import graphql.schema.CoercingParseLiteralException;
import graphql.schema.CoercingParseValueException;
import graphql.schema.CoercingSerializeException;
import graphql.schema.GraphQLScalarType;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class ISODateType extends GraphQLScalarType {
    public ISODateType() {
        super("ISODate", "ISO conversion", new IsoDateCoercing());
    }

    private static class IsoDateCoercing implements Coercing<ZonedDateTime, String> {
        private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ISO_OFFSET_DATE_TIME;

        @Override
        public String serialize(Object value) throws CoercingSerializeException {
            return value instanceof ZonedDateTime ? FORMATTER.format((ZonedDateTime) value) : null;
        }

        @Override
        public ZonedDateTime parseValue(Object value) throws CoercingParseValueException {
            return value instanceof String ? ZonedDateTime.parse((String) value, FORMATTER) : null;
        }

        @Override
        public ZonedDateTime parseLiteral(Object value) throws CoercingParseLiteralException {
            return value instanceof StringValue ? ZonedDateTime.parse(((StringValue) value).getValue(), FORMATTER) : null;
        }
    }
}
