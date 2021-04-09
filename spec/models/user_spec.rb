# == Schema Information
#
# Table name: users
#
#  id              :uuid             not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email     (email) UNIQUE
#  index_users_on_username  (username) UNIQUE
#
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validations' do
    it 'raises error when username is empty' do
      user = described_class.create(email: 'test@gmail.com', password: '123456', password_confirmation: '123456')

      expect(user.errors.any?).to eq(true)
    end

    it 'raises error when username is not unique' do
      described_class.create(username: 'username', email: 'test@gmail.com', password: '123456', password_confirmation: '123456')

      user = described_class.create(username: 'username', email: 'unique@gmail.com', password: '123456', password_confirmation: '123456')

      expect(user.errors.any?).to eq(true)
    end

    it 'raises error when email is empty' do
      user = described_class.create(username: 'username', password: '123456', password_confirmation: '123456')

      expect(user.errors.any?).to eq(true)
    end

    it 'raises error when email is not unique' do
      described_class.create(username: 'username', email: 'test@gmail.com', password: '123456', password_confirmation: '123456')

      user = described_class.create(username: 'uniqueusername', email: 'test@gmail.com', password: '123456', password_confirmation: '123456')

      expect(user.errors.any?).to eq(true)
    end

    it 'raises error when email format is not correct' do
      user = described_class.create(username: 'username', email: 'test', password: '123456', password_confirmation: '123456')

      expect(user.errors.any?).to eq(true)
    end

    it 'raises error when password_confirmation is empty' do
      user = described_class.create(username: 'username', email: 'test@gmail.com', password: '123456')

      expect(user.errors.any?).to eq(true)
    end

    it 'raises error when password_confirmation is not correct' do
      user = described_class.create(username: 'username', email: 'test@gmail.com', password: '123456', password_confirmation: 'wrongpassword')

      expect(user.errors.any?).to eq(true)
    end

    it 'does not raise any errors when all fields are correct' do
      user = described_class.create(username: 'username', email: 'test@gmail.com', password: '123456', password_confirmation: '123456')

      expect(user.errors.any?).to eq(false)
    end
  end
end
