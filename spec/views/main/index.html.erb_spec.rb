require 'rails_helper'

RSpec.describe 'main/index', type: :view do
  it 'should render div with id root' do
    render

    expect(rendered).to match(%r{<div id="root"></div>})
  end
end
