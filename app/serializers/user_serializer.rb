class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :remember_me
end
