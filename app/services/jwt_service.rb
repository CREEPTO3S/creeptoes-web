class JwtService
  def self.encode(payload)
    Knock::AuthToken.new(payload: payload).token
  end
end
