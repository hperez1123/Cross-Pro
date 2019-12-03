class CreateBusinesses < ActiveRecord::Migration[6.0]
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :password_digest
      t.string :industry
      t.text :image_url
      t.text :mission
      t.text :motto
      t.boolean :network
      t.boolean :sell
      t.boolean :collaborate

      t.timestamps
    end
  end
end
