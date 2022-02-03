# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



    if User.count == 0 
        User.create(
            email:"alex@test.com", 
            password: "password1", password_confirmation: "password1", first_name: "Alex",
            last_name: "Lastname",
        )
        User.create(
            email:"alex2@test.com", 
            password: "password1", password_confirmation: "password1", first_name: "Alex2",
            last_name: "Lastname",
        )
        User.create(
            email:"alex3@test.com", 
            password: "password1", password_confirmation: "password1", first_name: "Alex3",
            last_name: "Lastname",
        )
    end

    categories = ["Accounting", "Administration & Office Support", "Advertising, Arts & Media", "Banking & Financial Services", "Call Centre & Customer Service", "CEO & General Management", "Community Services & Development", "Construction", "Consulting & Strategy", "Design & Architecture", "Education & Training", "Engineering", "Farming, Animals & Conservation", "Government & Defence", "Healthcare & Medical",  "Hospitality & Tourism", "Human Resources & Recruitment", "Information & Communication Technology", "Insurance & Superannuation", "Legal", "Manufacturing, Transport & Logistics", "Marketing Communications", "Mining, Resources & Energy", "Real Estate & Property", "Retail & Consumer Products Sales", "Science & Technology", "Self Employment", "Sport & Recreation", "Trades & Services"]

if Category.all.length == 0
    categories.each do |category|
        Category.create(name: category)
        puts "created #{category} category"
    end
end



if Post.all.length == 0
    Post.create(
        user_id: "1",
        category_id: "1",
        title: "Amazing Title 1", 
        intro: "Intro 1 Doing this job was amazing. I really enjoyed it. This is an intro.", 
        day_to_day: "Day to Day 1 Day to day my job was amazing",
        career_path: "Career Path 1 - I really part of performance of our future. We are now better able this a likely part of perating at cost efficies, and this is is job was a new production. We really part of performance of our future. We are are now better able.",
        expected_salary_range_from: "10000",
        expected_salary_range_to: "20000",
        difficulty: "1",
        job_security: "1",
        industry_growth: "Good1",
        work_life_balance: "Great1",
        upvotes: "0",
        downvotes: "0",
        role_details: "Role Details 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum urna, dictum non dolor eu, rhoncus tincidunt arcu. Praesent augue arcu, suscipit sodales ipsum vel, blandit venenatis arcu. Curabitur justo erat, accumsan at diam vel, venenatis rhoncus ex. Sed sed tortor in diam aliquet hendrerit. Proin maximus sodales eros, non luctus dui. Quisque sed tellus at quam ullamcorper vestibulum. Morbi quis iaculis urna. Donec nunc erat, lacinia in ante non, euismod porttitor tortor. Integer porttitor, purus in malesuada euismod, sapien velit aliquam lectus, a finibus nulla diam vel nibh. Cras interdum et est sed vestibulum. Quisque mauris felis, laoreet quis posuere in, auctor eu lacus. Duis sit amet tempor nisi.
        Maecenas elementum erat ut scelerisque varius. Proin placerat ultrices mattis. Fusce sit amet tempus nibh. Fusce sed placerat nunc, tempus dictum diam. Nunc imperdiet dui risus. Praesent finibus dictum libero, ut blandit lorem interdum mollis. Nullam eget congue lacus, nec viverra libero. Duis pharetra vestibulum urna vehicula tristique. Ut semper hendrerit magna, eget condimentum elit ultrices sed. Aenean placerat est vitae laoreet volutpat. Nulla et pretium tellus, ut volutpat turpis.
        Aliquam magna erat, tincidunt vel augue id, eleifend pretium mi. Integer eget nisi scelerisque, euismod massa vel, molestie sem. Sed et hendrerit justo, sit amet suscipit enim. Mauris a dolor quam. Sed et eros elementum, hendrerit diam vel, congue augue. Morbi dapibus massa urna, et suscipit urna aliquam eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sagittis leo sagittis felis lacinia blandit. Nunc blandit gravida dui, eget porta enim commodo nec. Cras ornare urna mi, ut aliquam enim pharetra non. Cras tempor enim sed velit hendrerit fringilla. Curabitur efficitur efficitur turpis, in posuere nulla varius a. Proin dictum elit at diam congue dapibus vel sit amet lorem. Vivamus sollicitudin blandit lacinia.
        ",
        job_description: "Job Description 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum urna, dictum non dolor eu, rhoncus tincidunt arcu. Praesent augue arcu, suscipit sodales ipsum vel, blandit venenatis arcu. Curabitur justo erat, accumsan at diam vel, venenatis rhoncus ex. Sed sed tortor in diam aliquet hendrerit. Proin maximus sodales eros, non luctus dui. Quisque sed tellus at quam ullamcorper vestibulum. Morbi quis iaculis urna. Donec nunc erat, lacinia in ante non, euismod porttitor tortor. Integer porttitor, purus in malesuada euismod, sapien velit aliquam lectus, a finibus nulla diam vel nibh. Cras interdum et est sed vestibulum. Quisque mauris felis, laoreet quis posuere in, auctor eu lacus. Duis sit amet tempor nisi.
        Maecenas elementum erat ut scelerisque varius. Proin placerat ultrices mattis. Fusce sit amet tempus nibh. Fusce sed placerat nunc, tempus dictum diam. Nunc imperdiet dui risus. Praesent finibus dictum libero, ut blandit lorem interdum mollis. Nullam eget congue lacus, nec viverra libero. Duis pharetra vestibulum urna vehicula tristique. Ut semper hendrerit magna, eget condimentum elit ultrices sed. Aenean placerat est vitae laoreet volutpat. Nulla et pretium tellus, ut volutpat turpis.
        Aliquam magna erat, tincidunt vel augue id, eleifend pretium mi. Integer eget nisi scelerisque, euismod massa vel, molestie sem. Sed et hendrerit justo, sit amet suscipit enim. Mauris a dolor quam. Sed et eros elementum, hendrerit diam vel, congue augue. Morbi dapibus massa urna, et suscipit urna aliquam eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sagittis leo sagittis felis lacinia blandit. Nunc blandit gravida dui, eget porta enim commodo nec. Cras ornare urna mi, ut aliquam enim pharetra non. Cras tempor enim sed velit hendrerit fringilla. Curabitur efficitur efficitur turpis, in posuere nulla varius a. Proin dictum elit at diam congue dapibus vel sit amet lorem. Vivamus sollicitudin blandit lacinia."
    )
    Post.create(
        user_id: "1",
        category_id: "2",
        title: "Amazing Title 2", 
        intro: "Intro 2 Doing this job was amazing. I really enjoyed it. This is an intro.", 
        day_to_day: "Day to Day 2 Day to day my job was amazing",
        career_path: "Career Path 2 - I really part of performance of our future. We are now better able this a likely part of perating at cost efficies, and this is is job was a new production. We really part of performance of our future. We are are now better able.",
        expected_salary_range_from: "20000",
        expected_salary_range_to: "30000",
        difficulty: "2",
        job_security: "2",
        industry_growth: "Good2",
        work_life_balance: "Great2",
        upvotes: "0",
        downvotes: "0",
        role_details: "Role Details 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum urna, dictum non dolor eu, rhoncus tincidunt arcu. Praesent augue arcu, suscipit sodales ipsum vel, blandit venenatis arcu. Curabitur justo erat, accumsan at diam vel, venenatis rhoncus ex. Sed sed tortor in diam aliquet hendrerit. Proin maximus sodales eros, non luctus dui. Quisque sed tellus at quam ullamcorper vestibulum. Morbi quis iaculis urna. Donec nunc erat, lacinia in ante non, euismod porttitor tortor. Integer porttitor, purus in malesuada euismod, sapien velit aliquam lectus, a finibus nulla diam vel nibh. Cras interdum et est sed vestibulum. Quisque mauris felis, laoreet quis posuere in, auctor eu lacus. Duis sit amet tempor nisi.
        Maecenas elementum erat ut scelerisque varius. Proin placerat ultrices mattis. Fusce sit amet tempus nibh. Fusce sed placerat nunc, tempus dictum diam. Nunc imperdiet dui risus. Praesent finibus dictum libero, ut blandit lorem interdum mollis. Nullam eget congue lacus, nec viverra libero. Duis pharetra vestibulum urna vehicula tristique. Ut semper hendrerit magna, eget condimentum elit ultrices sed. Aenean placerat est vitae laoreet volutpat. Nulla et pretium tellus, ut volutpat turpis.
        Aliquam magna erat, tincidunt vel augue id, eleifend pretium mi. Integer eget nisi scelerisque, euismod massa vel, molestie sem. Sed et hendrerit justo, sit amet suscipit enim. Mauris a dolor quam. Sed et eros elementum, hendrerit diam vel, congue augue. Morbi dapibus massa urna, et suscipit urna aliquam eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sagittis leo sagittis felis lacinia blandit. Nunc blandit gravida dui, eget porta enim commodo nec. Cras ornare urna mi, ut aliquam enim pharetra non. Cras tempor enim sed velit hendrerit fringilla. Curabitur efficitur efficitur turpis, in posuere nulla varius a. Proin dictum elit at diam congue dapibus vel sit amet lorem. Vivamus sollicitudin blandit lacinia.
        ",
        job_description: "Job Description 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum urna, dictum non dolor eu, rhoncus tincidunt arcu. Praesent augue arcu, suscipit sodales ipsum vel, blandit venenatis arcu. Curabitur justo erat, accumsan at diam vel, venenatis rhoncus ex. Sed sed tortor in diam aliquet hendrerit. Proin maximus sodales eros, non luctus dui. Quisque sed tellus at quam ullamcorper vestibulum. Morbi quis iaculis urna. Donec nunc erat, lacinia in ante non, euismod porttitor tortor. Integer porttitor, purus in malesuada euismod, sapien velit aliquam lectus, a finibus nulla diam vel nibh. Cras interdum et est sed vestibulum. Quisque mauris felis, laoreet quis posuere in, auctor eu lacus. Duis sit amet tempor nisi.
        Maecenas elementum erat ut scelerisque varius. Proin placerat ultrices mattis. Fusce sit amet tempus nibh. Fusce sed placerat nunc, tempus dictum diam. Nunc imperdiet dui risus. Praesent finibus dictum libero, ut blandit lorem interdum mollis. Nullam eget congue lacus, nec viverra libero. Duis pharetra vestibulum urna vehicula tristique. Ut semper hendrerit magna, eget condimentum elit ultrices sed. Aenean placerat est vitae laoreet volutpat. Nulla et pretium tellus, ut volutpat turpis.
        Aliquam magna erat, tincidunt vel augue id, eleifend pretium mi. Integer eget nisi scelerisque, euismod massa vel, molestie sem. Sed et hendrerit justo, sit amet suscipit enim. Mauris a dolor quam. Sed et eros elementum, hendrerit diam vel, congue augue. Morbi dapibus massa urna, et suscipit urna aliquam eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sagittis leo sagittis felis lacinia blandit. Nunc blandit gravida dui, eget porta enim commodo nec. Cras ornare urna mi, ut aliquam enim pharetra non. Cras tempor enim sed velit hendrerit fringilla. Curabitur efficitur efficitur turpis, in posuere nulla varius a. Proin dictum elit at diam congue dapibus vel sit amet lorem. Vivamus sollicitudin blandit lacinia."
    )
    Post.create(
        user_id: "1",
        category_id: "3",
        title: "Amazing Title 3", 
        intro: "Intro 3 Doing this job was amazing. I really enjoyed it. This is an intro.", 
        day_to_day: "Day to Day 3 Day to day my job was amazing",
        career_path: "Career Path 3 - I really part of performance of our future. We are now better able this a likely part of perating at cost efficies, and this is is job was a new production. We really part of performance of our future. We are are now better able.",
        expected_salary_range_from: "30000",
        expected_salary_range_to: "40000",
        difficulty: "3",
        job_security: "3",
        industry_growth: "Good3",
        work_life_balance: "Great3",
        upvotes: "0",
        downvotes: "0",
        role_details: "Role Details 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum urna, dictum non dolor eu, rhoncus tincidunt arcu. Praesent augue arcu, suscipit sodales ipsum vel, blandit venenatis arcu. Curabitur justo erat, accumsan at diam vel, venenatis rhoncus ex. Sed sed tortor in diam aliquet hendrerit. Proin maximus sodales eros, non luctus dui. Quisque sed tellus at quam ullamcorper vestibulum. Morbi quis iaculis urna. Donec nunc erat, lacinia in ante non, euismod porttitor tortor. Integer porttitor, purus in malesuada euismod, sapien velit aliquam lectus, a finibus nulla diam vel nibh. Cras interdum et est sed vestibulum. Quisque mauris felis, laoreet quis posuere in, auctor eu lacus. Duis sit amet tempor nisi.
        Maecenas elementum erat ut scelerisque varius. Proin placerat ultrices mattis. Fusce sit amet tempus nibh. Fusce sed placerat nunc, tempus dictum diam. Nunc imperdiet dui risus. Praesent finibus dictum libero, ut blandit lorem interdum mollis. Nullam eget congue lacus, nec viverra libero. Duis pharetra vestibulum urna vehicula tristique. Ut semper hendrerit magna, eget condimentum elit ultrices sed. Aenean placerat est vitae laoreet volutpat. Nulla et pretium tellus, ut volutpat turpis.
        Aliquam magna erat, tincidunt vel augue id, eleifend pretium mi. Integer eget nisi scelerisque, euismod massa vel, molestie sem. Sed et hendrerit justo, sit amet suscipit enim. Mauris a dolor quam. Sed et eros elementum, hendrerit diam vel, congue augue. Morbi dapibus massa urna, et suscipit urna aliquam eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sagittis leo sagittis felis lacinia blandit. Nunc blandit gravida dui, eget porta enim commodo nec. Cras ornare urna mi, ut aliquam enim pharetra non. Cras tempor enim sed velit hendrerit fringilla. Curabitur efficitur efficitur turpis, in posuere nulla varius a. Proin dictum elit at diam congue dapibus vel sit amet lorem. Vivamus sollicitudin blandit lacinia.
        ",
        job_description: "Job Description 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum urna, dictum non dolor eu, rhoncus tincidunt arcu. Praesent augue arcu, suscipit sodales ipsum vel, blandit venenatis arcu. Curabitur justo erat, accumsan at diam vel, venenatis rhoncus ex. Sed sed tortor in diam aliquet hendrerit. Proin maximus sodales eros, non luctus dui. Quisque sed tellus at quam ullamcorper vestibulum. Morbi quis iaculis urna. Donec nunc erat, lacinia in ante non, euismod porttitor tortor. Integer porttitor, purus in malesuada euismod, sapien velit aliquam lectus, a finibus nulla diam vel nibh. Cras interdum et est sed vestibulum. Quisque mauris felis, laoreet quis posuere in, auctor eu lacus. Duis sit amet tempor nisi.
        Maecenas elementum erat ut scelerisque varius. Proin placerat ultrices mattis. Fusce sit amet tempus nibh. Fusce sed placerat nunc, tempus dictum diam. Nunc imperdiet dui risus. Praesent finibus dictum libero, ut blandit lorem interdum mollis. Nullam eget congue lacus, nec viverra libero. Duis pharetra vestibulum urna vehicula tristique. Ut semper hendrerit magna, eget condimentum elit ultrices sed. Aenean placerat est vitae laoreet volutpat. Nulla et pretium tellus, ut volutpat turpis.
        Aliquam magna erat, tincidunt vel augue id, eleifend pretium mi. Integer eget nisi scelerisque, euismod massa vel, molestie sem. Sed et hendrerit justo, sit amet suscipit enim. Mauris a dolor quam. Sed et eros elementum, hendrerit diam vel, congue augue. Morbi dapibus massa urna, et suscipit urna aliquam eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sagittis leo sagittis felis lacinia blandit. Nunc blandit gravida dui, eget porta enim commodo nec. Cras ornare urna mi, ut aliquam enim pharetra non. Cras tempor enim sed velit hendrerit fringilla. Curabitur efficitur efficitur turpis, in posuere nulla varius a. Proin dictum elit at diam congue dapibus vel sit amet lorem. Vivamus sollicitudin blandit lacinia."
    )

end


