class JwtService
  def self.encode(payload)
    JWT.encode payload, Rails.application.credentials.hmac_secret_key!, 'HS256'
  end
end
