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
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validations' do
    it 'should raise error when username is empty' do
      user = User.create({ email: 'test@gmail.com', password: '123456', password_confirmation: '123456' })
      user.save

      expect(user.errors.any?).to eq(true)
    end

    it 'should raise error when username is not unique' do
      User.create(
        { username: 'username', email: 'test@gmail.com', password: '123456', password_confirmation: '123456' }
      )

      user = User.create(
        { username: 'username', email: 'unique@gmail.com', password: '123456', password_confirmation: '123456' }
      )
      user.save

      expect(user.errors.any?).to eq(true)
    end

    it 'should raise error when email is empty' do
      user = User.create({ username: 'username', password: '123456', password_confirmation: '123456' })
      user.save

      expect(user.errors.any?).to eq(true)
    end

    it 'should raise error when email is not unique' do
      User.create(
        { username: 'username', email: 'test@gmail.com', password: '123456', password_confirmation: '123456' }
      )

      user = User.create(
        { username: 'uniqueusername', email: 'test@gmail.com', password: '123456', password_confirmation: '123456' }
      )
      user.save

      expect(user.errors.any?).to eq(true)
    end

    it 'should raise error when email format is not correct' do
      user = User.create({ username: 'username', email: 'test', password: '123456', password_confirmation: '123456' })
      user.save

      expect(user.errors.any?).to eq(true)
    end

    it 'should raise error when password_confirmation is empty' do
      user = User.create({ username: 'username', email: 'test@gmail.com', password: '123456' })
      user.save

      expect(user.errors.any?).to eq(true)
    end

    it 'should raise error when password_confirmation is not correct' do
      user = User.create(
        { username: 'username', email: 'test@gmail.com', password: '123456', password_confirmation: 'wrongpassword' }
      )
      user.save

      expect(user.errors.any?).to eq(true)
    end

    it 'should not raise any errors when all fields are correct' do
      user = User.create(
        { username: 'username', email: 'test@gmail.com', password: '123456', password_confirmation: '123456' }
      )
      user.save

      expect(user.errors.any?).to eq(false)
    end
  end
end
