thetas = 8
phis = 8

with open('test.bdf', 'w') as f:
    theta_count = 1
    phi_count = 0
    for phi in range(phis):
        phi = phi * 360/phis
        for theta in range(thetas):
            theta = theta * 360/thetas
            f.write('GRID'.ljust(8) + str(theta_count+phi_count).ljust(8) + str(2).ljust(8) + str(1.0).ljust(8) + str(theta).ljust(8) + str(phi).ljust(8) + '\n')
            theta_count += 1
        f.write('\n')
        phi_count += 10
        theta_count = 0